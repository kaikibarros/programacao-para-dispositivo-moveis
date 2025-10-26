# programacao-para-dispositivo-moveis

# comandos

npx create-expo-app@latest

cd my-project

npm install --global eas-cli

eas login

eas build:configure
-> all

npx expo install expo-dev-cliente

eas update:configure

eas build --platform android --profile preview
-> escolha o id da sua aplicação no formato: com.dominio.myproject
-> responder y para gerar Android Keystore
-> depois que ele mostrar a URL para a sua Build você pode apertar o CTRL+C

eas update --auto

# atualizar expo

- npm install expo@^54.0.0
- npx expo install --fix -- --legacy-peer-deps
- npx expo-doctor@latest

npx expo install @expo/metro-runtime react-native-worklets
npx expo-doctor@latest

# rodar


npx expo start --tunnel
