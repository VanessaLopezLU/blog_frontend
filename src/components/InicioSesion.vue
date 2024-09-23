<template>
    <v-container class="contenedor py-10">
      <v-row class="justify-center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="pa-6" elevation="10">
            <v-card-title class="justify-center">
              <h1 class="text-center mb-4">Iniciar Sesión</h1>
            </v-card-title>
            <v-card-text>
              <v-form ref="formLogin" lazy-validation>
                <v-text-field 
                  v-model="paqueteUsuario.email" 
                  label="Email" 
                  outlined 
                  dense 
                  clearable
                  prepend-inner-icon="mdi-account"
                  color="black"
                  class="text-black"
                  :rules="[v => !!v || 'Usuario es requerido']"
                ></v-text-field>
  
                <v-text-field 
                  v-model="paqueteUsuario.password" 
                  label="Contraseña" 
                  outlined 
                  dense 
                  clearable
                  prepend-inner-icon="mdi-lock"
                  type="password"
                  color="black"
                  class="text-black"
                  :rules="[v => !!v || 'Contraseña es requerida']"
                ></v-text-field>
  
                <v-card-actions class="justify-center">
                  <v-btn class="btn" @click="loginUser" block>
                    <v-icon left>mdi-login</v-icon>Ingresar
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
  
            <v-card-actions class="justify-center">
              <span class="no-account-text">¿No tienes una cuenta?</span>
              <v-btn color="secondary" @click="goToRegister">
                <v-icon left>mdi-account-plus</v-icon>Regístrate aquí
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        paqueteUsuario: {
          email: null,
          password: null,
        },
        validLogin: false,
        passwordRules: [(v) => !!v || 'La contraseña es requerida']
      };
    },
    methods: {
      async loginUser() {
        // Validar el formulario antes de proceder
        const isValid = this.$refs.formLogin.validate();
        if (!isValid) return;
  
        try {
          const response = await axios.post(`${import.meta.env.VITE_APP_API}/auth/login`,
            this.paqueteUsuario
          );
          

          
          Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
          this.$router.push('/cargar-datos')
          
        } catch (error) {
          Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
      },
      goToRegister() {
        this.$router.replace('/registrarse'); 
      }
    }
  }
  </script>
  
  <style scoped>
  .contenedor {
    background-color: #5a9bb9;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn {
    background-color: #5a9bb9;
    color: white;
  }
  
  h1 {
    font-family: 'Cambria', serif;
    color: black;
  }
  
  .v-card {
    background-color: #f5f5f5;
    border-radius: 15px;
  }
  
  .v-text-field {
    margin-bottom: 16px;
  }
  
  .v-text-field .v-input__control {
    color: black;
  }
  
  .v-btn {
    font-weight: bold;
  }
  
  .no-account-text {
    color: black;
    margin-right: 8px;
  }
  </style>
  