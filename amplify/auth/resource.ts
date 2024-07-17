import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Bem vindo ao SmartPlantPot!",
      verificationEmailBody: (createCode) => `Use este código para ativar sua conta: ${createCode()}`,
    },
  },
})