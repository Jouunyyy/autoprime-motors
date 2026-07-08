function askCar(carName) {
  document.getElementById("carro").value = carName;
  document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
}

function sendLead(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const carro = document.getElementById("carro").value || "Não especificado";
  const mensagem = document.getElementById("mensagem").value || "Sem mensagem";

  const text = `Olá, sou ${nome}. Tenho interesse em: ${carro}. Telemóvel: ${telefone}. Mensagem: ${mensagem}`;
  const whatsappNumber = "351900000000";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}
