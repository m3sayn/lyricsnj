<template>
  <v-app>
    <v-app-bar app class="bg-green-lighten-3">
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')" >LyricsNJ</v-toolbar-title>
      <nav>
        <router-link to="/hypeboy">
            <v-btn class="mx-4 white--text" elevation="2" x-large rounded color="black" to="/hypeboy">
              Hype Boy
            </v-btn>
        </router-link> 
        <router-link to="/ditto">
          <v-btn class="mx-4 white--text" elevation="2" x-large rounded color="black" to="/ditto">
            Ditto
          </v-btn>
        </router-link> 
        <router-link to="/supershy">
          <v-btn class="mx-4 white--text" elevation="2" x-large rounded color="black" to="/supershy">
            Super Shy
          </v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn class="mx-4 white--text" elevation="2" x-large rounded color="black" to="/about">
            Информация о сайте
          </v-btn>
        </router-link>
      </nav>
    </v-app-bar>
    <v-main>
      <router-view/>

      <!-- <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Войти</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Имя пользователя"
            prepend-icon="mdi-account-circle"
            v-model="email"
          ></v-text-field>
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Пароль"
            prepend-icon="mdi-lock"
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword=!showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success" @click_prevent="signup">Зарегистрироваться</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Войти</v-btn>
      </v-card-actions>
    </v-card> -->
    </v-main>

  <v-footer class="bg-green-lighten-3">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>LyricsNJ</strong>
      </v-col>
    </v-row>
  </v-footer>

  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    showPassword: false,
    links: [
      'Home',
      'Login'
    ]
  })
}
</script>
