<template>
  <!-- App -->
  <div id="app">
    <!-- Main View -->
    <f7-view id="main-view" url="/" main>
        <t-dialog ></t-dialog>
    </f7-view>

  </div>
</template>

<script>
import dialog from './components/now_components/dialog';
export default {
    components: {
      't-dialog' : dialog
    },
    created () {

    },

}
</script>
