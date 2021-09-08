
import { render, screen } from '@testing-library/react';
//Importando nosso componente.
import App from './App'; 


test('renders learn react link', () => {

  render(<App />);

  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});


import userEvent from  '@testing-library/user-event';


test('renders checkbox test', () => {
 render(<App  />);
 userEvent.click(screen.getByText('Check'))
 expect(screen.getByLabelText('Check')).toBeChecked()

});

