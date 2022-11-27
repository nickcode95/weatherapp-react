Calls API from https://openweathermap.org/ create your own API key for your account.

This app use dotenv (.env) to manage the API and url endponts. I have edited the webpack to be able to use dotenv because I was getting unknown errors:
[javascript - Passing environment-dependent variables in webpack - Stack Overflow](https://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack)

UI is still a work in progress. API is called using fetch asycnrhonously and useEffect
