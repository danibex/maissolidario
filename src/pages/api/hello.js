// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var novoUsuario = {
    name: "Rafael Santana",
    email: "danielivam96@gmail.com",
    phone: "",
    mobilePhone: "71991402207",
    cpfCnpj: "06353867557",
    postalCode: "40391-160",
    address: "",
    addressNumber: "395",
    complement: "",
    province: "",
    externalReference: "1",
    notificationDisabled: false,
    additionalEmails: "rebecaalmeida99@gmail.com",
    municipalInscription: "",
    stateInscription: "",
    observations: "Testando dev"
  };

  
  
  fetch('https://www.asaas.com/api/v3/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'access_token': '$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzMTMwNjY6OiRhYWNoXzMxYjg3Yjg0LWY5OTAtNDE4YS1hZDAzLWM1ODkwOGYwNjFiMQ=='
    },
    body: JSON.stringify(novoUsuario)
  })
    .then(response => {
      console.log('Status:', response.status);
      console.log('Headers:', JSON.stringify(response.headers));
      return response.json();
    })
    .then(data => {
      console.log('Response:', data);
      res.status(200).json({data})
    })
    .catch(error => {
      console.error('Error:', error);
    });

    
}
