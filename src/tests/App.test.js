import { render } from '@testing-library/react';
import App from '../App';


describe('Renderizando elementos na tela', () => {
  it('Verifica o texto no hero', () => {
    const { getByText } = render(<App />);
    const texto = getByText(
      'Easily create or join a local nanny share with Hapu'
    );
    expect(texto).toBeInTheDocument();
  });

  it('Verifica a barra header com os menu', () => {
    const { getAllByRole } = render(<App />);

    const link = getAllByRole('link');
    expect(link[0]).toHaveTextContent('Create Your Nanny Share');
    
  })
})