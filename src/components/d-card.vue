<template>
  <section
    v-bind="$attrs"
    class="d-card is-card"
    data-testid="card"
    v-bind:class="[
      'is-width-' + width,
      borderColor,
      textColor,
      'has-background-' + variant,
    ]"
  >
    <header v-if="!person" v-bind:class="[headerRule]">
      <slot name="header"> </slot>
    </header>
    <div v-bind:class="person ? 'd-person-card-content' : 'card-content'">
      <slot name="content" />
    </div>
    <footer class="pb-2">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
import discoBaseMixin from '@/mixins/disco-base-mixin.js';

export default {
  mixins: [discoBaseMixin],
  props: {
    person: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
