<template>
  <div id="app">
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">
          Home
        </li>

        <li class="c-nav-list-item">
          Contact
        </li>
      </ul>
    </nav>
    <h1>Eurosong festival</h1>

    <div class="c-feedback warning">
      Er is iets fout gegaan
    </div>

    <div class="c-feedback error">
      Tis kapot
    </div>

    <div class="c-feedback success">
      twerkt
    </div>
  </div>

</template>

<script>
import style from "./scss/style.scss" //import of the whole styling for the app

export default {
  name: 'App',
}
</script>
