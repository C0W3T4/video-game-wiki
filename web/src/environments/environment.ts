export const environment = {
  RAPID_API_HOST: process.env['RAPID_API_HOST'] || '',
  RAPID_API_BASE_URL: `https://${process.env['RAPID_API_HOST']}` || '',
  RAPID_API_KEY: process.env['RAPID_API_KEY'] || '',
  API_KEY: process.env['API_KEY'] || ''
};
