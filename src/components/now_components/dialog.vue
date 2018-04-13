<template>
  <f7-page>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
    <f7-block-title>Form Example</f7-block-title>
    <f7-list form v-show="$store.state.dialog.show">
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item>
      <f7-list-item title="Toggle">
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Slider</f7-label>
        <f7-input>
          <f7-range min="0" max="100" value="50" step="1" :label="true"></f7-range>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input type="textarea" placeholder="Bio"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Resizable</f7-label>
        <f7-input type="textarea" placeholder="Bio" resizable></f7-input>
      </f7-list-item>
    </f7-list>



    <f7-block-title>Buttons</f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col" @click="$store.dispatch('switch_dialog')">点击</f7-button>
      </f7-row>

    </f7-block>
  </f7-page>
</template>

<script>
export default {
    name: 'dialog_form',
    components: {

    },
    data() {
      return {

      }
    },
    props: {

    },
    created() {

    },
    methods: {

    }
}
</script>
