import gramado from '../assets/gramado.png';
import rio from '../assets/riodejaneiro.png';
import transfer from '../assets/transfer.png';

export const Data = {
  text: 'Ótimo! Encontramos pacotes excelentes que combinam com você!',
  inputType: 'packageChoice',
  packages: [
    {
      name: 'Cidade a dois',
      description: 'Gramado + Canela com hotel 4 estrelas e café da manhã',
      startDate: '20/04',
      endDate: '25/04',
      source: gramado,
      prices: {
        money: 2500,
        club: 2000,
        miles: 25000,
      },
      tags: ['casal', 'romantico'],
    },
    {
      name: 'Praia badalada',
      description:
        'Rio de janeiro, hotel 5 estrelas na orla de copacabana com cafe da manha',
      startDate: '20/07',
      endDate: '25/07',
      source: rio,
      prices: {
        money: 4000,
        club: 3800,
        miles: 80000,
      },
      tags: ['praia', 'vida noturna'],
    },
  ],
  options: ['Prefiro esperar e receber novos pacotes no meu email'],
  step: 12,
};

export const OptionsData = {
  text:
    'Gostaria de adicionar transfer ou algum passeio? Veja o que temos disponível',
  inputType: 'packagePlus',
  plusOptions: [
    {
      description:
        'Transfer aeroporto para gramado + passeio caminhos de pedra',
      price: 400,
      source: transfer,
    },
    ,
  ],
  options: ['Realizar pagamento'],
  step: 14,
};
