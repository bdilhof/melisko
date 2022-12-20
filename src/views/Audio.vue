<template>
  <div class="container">
    <h1>Meliško</h1>
    <div v-if="files.length" class="row">
      <div v-for="file in files" class="col-sm-4">
        <button @click="play(file.path)" class="btn btn-lg btn-primary w-100 mb-2 text-nowrap">
          {{ file.name }}
        </button>
      </div>
    </div>
    <audio ref="player"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          name: 'Aby ťa mater zabila!',
          path: 'audio/aby_ta_mater_zabila.wav',
        },
        {
          name: 'Pozor!',
          path: 'audio/pozor.wav',
        },
        {
          name: 'To je čo toto?',
          path: 'audio/to_je_co_toto.wav',
        },
        {
          name: 'Toto je život!',
          path: 'audio/toto_je_zivot.wav',
        },
        {
          name: 'Už mám v piči nervy zas!',
          path: 'audio/uz_mam_v_pici_nervy_zas.wav',
        },
        {
          name: 'A kto to vypol?!',
          path: 'audio/a_kto_to_vypol.wav',
        },
        {
          name: 'Áno!',
          path: 'audio/ano.wav',
        },
        {
          name: 'Boha!',
          path: 'audio/boha.wav',
        },
        {
          name: 'Božemoj!',
          path: 'audio/boze_moj.wav',
        },
        {
          name: 'Daj to dopiče!',
          path: 'audio/daj_to_do_pice.wav',
        },
        {
          name: 'O deviatej!',
          path: 'audio/o_deviatej.wav',
        },
        {
          name: 'Ťa zabijem hneď!',
          path: 'audio/ta_zabijem_hned.wav',
        },
        {
          name: 'Ty tam nejeb!',
          path: 'audio/ty_tam_nejeb.wav',
        },
      ]
    }
  },

  methods: {
    play(file) {
      this.$refs.player.src = file;
      this.$refs.player.play();
    }
  },
}
</script>
