import SignUp from "./SignUp";
import { render, screen, fireEvent, waitFor } from  '@testing-library/react';
import axios from "axios";

describe('SignUp page',()=>{
    test('render signup component without an error',()=>{
       render(<SignUp />);
    });

    test('renders input fields with correct placeholder',()=>{
        render(<SignUp />);
        expect(screen.getByPlaceholderText('your email please...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('your password please...')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm your password...')).toBeInTheDocument();
    })
    test('displays error message when passwords do not match', ()=>{
        render(<SignUp />);
        const passwordInput = screen.getByPlaceholderText('your password please...');
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

        fireEvent.change(passwordInput, {target:{value:'yana123'}});
        fireEvent.change(confirmPasswordInput, {target:{ value:'abc123'}});

        fireEvent.click(screen.getByText('Send'));
        expect(screen.getByText('Passwords do not match')).toBeInTheDocument();        
    })

    jest.mock('axios');
    test('form submission triggers the API call', async ()=>{
       render(<SignUp />);

       axios.post.mockResolvedValueOnce({ status: 200});

       const emailInput = screen.getByPlaceholderText('your email please...');
       const passwordInput = screen.getByPlaceholderText('your password please...');
       const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');

       fireEvent.change(emailInput, {target: {value: 'yana123@gmail.com'}});
       fireEvent.change(passwordInput, {target:{ value: 'yana123'}});
       fireEvent.change(confirmPasswordInput,{target: {value:'yana123'}});

       fireEvent.click(screen.getByText('Send'));

       await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    })
    jest.mock('axios');

test('displays loading state while the API call is in progress', async () => {
  render(<SignUp />);
  // Mock axios.post to delay the response
  axios.post.mockResolvedValueOnce(new Promise((resolve) => setTimeout(resolve, 1000)));
  // Assuming the email, password, and confirm password inputs are already on the screen
  const emailInput = screen.getByPlaceholderText('your name please...');
  const passwordInput = screen.getByPlaceholderText('your email please...');
  const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password...');
  // Enter valid details
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  // Trigger form submission
  fireEvent.click(screen.getByText('Send'));
  // Check if the loading state is displayed
  expect(screen.getByText('Sending...')).toBeInTheDocument();
  // Wait for the API call to complete
  await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
});





})