export class User
{
  public name = '';
  public username = '';
  public surname = '';
  public email = '';
  public password = '';
  public confirmPassword = '';
  public credit = 0; 
 
  constructor( data ?: {
    name ?: string,
    surname ?: string,
    username ?: string,
    email ?: string,
    password ?: string,
    confirmPassword ?: string,
    credit ?: number
  }) {
    Object.assign(this, data || {});
  }
}