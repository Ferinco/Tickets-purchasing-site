export async function handler(event, context) {
    const { name, email, password } = JSON.parse(event.body);
  
    // TODO: Implement sign-up logic here
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Sign-up successful' })
    };
  }
  