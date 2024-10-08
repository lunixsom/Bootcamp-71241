// Cargar los artículos del menú desde el archivo JSON
fetch('https://raw.githubusercontent.com/RosanaGascon/Ejercicio-08-Resto/refs/heads/main/js/menuItems.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        return response.json();
    })
    .then(menuItems => {
        // Función para inicializar los inputs en el HTML
        window.onload = () => {
            menuItems.forEach((item) => {
                const itemDiv = document.querySelector(`[data-item="${item.name}"]`);
                if (itemDiv) {
                    // Crear contenedor para el input y los botones
                    const quantityContainer = document.createElement("div");
                    quantityContainer.classList.add("quantity-container");

                    const quantityInput = document.createElement("input");
                    quantityInput.type = "number";
                    quantityInput.min = "0";
                    quantityInput.value = "0";
                    quantityInput.id = `item-${item.id}`;
                    quantityInput.classList.add("quantity-input");

                    // Botón de aumentar
                    const increaseButton = document.createElement("button");
                    increaseButton.innerText = "+";
                    increaseButton.classList.add("quantity-button");
                    increaseButton.onclick = () => {
                        quantityInput.value = parseInt(quantityInput.value) + 1;
                    };

                    // Botón de disminuir
                    const decreaseButton = document.createElement("button");
                    decreaseButton.innerText = "-";
                    decreaseButton.classList.add("quantity-button");
                    decreaseButton.onclick = () => {
                        quantityInput.value = Math.max(0, parseInt(quantityInput.value) - 1);
                    };

                    // Agregar el input y los botones al contenedor
                    quantityContainer.appendChild(decreaseButton);
                    quantityContainer.appendChild(quantityInput);
                    quantityContainer.appendChild(increaseButton);

                    // Insertar el contenedor al final del div del producto
                    itemDiv.querySelector(".w-100").appendChild(quantityContainer);
                }
            });
        };

        // Función para validar el formulario antes de calcular o enviar el pedido
        function validateForm() {
            const name = document.getElementById("name").value.trim();
            const address = document.getElementById("address").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            // Validar si todos los campos están llenos
            if (!name || !address || !phone || !email) {
                Swal.fire("Por favor, completa todos los campos de contacto antes de calcular el total.");
                return false;
            }

            // Validar si se seleccionó al menos un artículo
            let hasOrder = false;
            menuItems.forEach((item) => {
                const quantity = document.getElementById(`item-${item.id}`);
                if (quantity) {
                    const qtyValue = parseInt(quantity.value) || 0;
                    if (qtyValue > 0) {
                        hasOrder = true;
                    }
                }
            });

            if (!hasOrder) {
                Swal.fire("Por favor, selecciona al menos un artículo antes de calcular el total.");
                return false;
            }

            return true; // Si todas las validaciones pasan
        }

        // Calcular el costo total basado en la cantidad de cada artículo.
        document.getElementById("calculate-btn").addEventListener("click", () => {
            // Primero validamos el formulario
            if (!validateForm()) {
                return; // Si la validación falla, salir de la función
            }

            // Calcular total solo si la validación pasa
            let total = 0;
            menuItems.forEach((item) => {
                const quantity = document.getElementById(`item-${item.id}`);
                if (quantity) {
                    const qtyValue = parseInt(quantity.value) || 0;
                    total += item.price * qtyValue;
                }
            });
            document.getElementById("total-cost").innerText = `Total: $${total.toFixed(2)}`;
        });

        // Función para enviar el pedido y mostrar la confirmación en un modal
        function submitOrder() {
            if (!validateForm()) return;

            const name = document.getElementById("name").value.trim();
            const address = document.getElementById("address").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            const orderDetails = menuItems.map((item) => {
                const quantity = document.getElementById(`item-${item.id}`);
                if (quantity) {
                    const qtyValue = parseInt(quantity.value) || 0;
                    return qtyValue > 0 ? `${item.name} (x${qtyValue}) - $${(item.price * qtyValue).toFixed(2)}` : null;
                }
                return null;
            }).filter((detail) => detail !== null);

            let total = orderDetails.reduce((acc, itemDetail) => {
                const priceMatch = itemDetail.match(/\$\d+(\.\d+)?/);
                if (priceMatch) {
                    acc += parseFloat(priceMatch[0].substring(1));
                }
                return acc;
            }, 0);

            const orderMessage = `
                <h4>Confirmación del Pedido</h4>
                <div>
                  <strong>Nombre:</strong> ${name}<br>
                  <strong>Dirección:</strong> ${address}<br>
                  <strong>Teléfono:</strong> ${phone}<br>
                  <strong>Email:</strong> ${email}
                </div>
                <br>
                <h5>Detalles del Pedido:</h5>
                <ul>${orderDetails.map((item) => `<li>${item}</li>`).join("")}</ul>
                <h4>Total: $${total.toFixed(2)}</h4>
            `;

            document.getElementById("order-details").innerHTML = orderMessage;
            const modal = document.getElementById("orderModal");
            modal.style.display = "block";

            const closeModal = document.getElementsByClassName("close")[0];
            closeModal.onclick = function() {
                modal.style.display = "none";
            };

            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };
        }

        document.getElementById("submit-order").addEventListener("click", submitOrder);
    })
    .catch(error => {
        console.error('Error cargando el menú:', error);
    });
