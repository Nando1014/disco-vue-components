<template>
  <span aria-label="expandable" class="d-expandable mx-2 my-2">
    <div
      class="level is-mobile d-expandable-header mb-0 px-0 py-2"
      v-bind:class="[textColor, { 'is-focused': isFocused }]"
      @click="onSelect"
      @keyup.enter="onSelect"
      @mouseover="setActive(true)"
      @mouseout="setActive(false)"
      @focus="setActive(true)"
      @blur="setActive(false)"
      tabindex="0"
      role="button"
      :aria-pressed="isExpanded"
    >
      <div class="level-left">
        <h4 class="level-item is-size-4">{{ title }}</h4>
      </div>

      <div class="level-right">
        <span class="icon">
          <DIcon
            v-if="isExpanded"
            class="level-item"
            name="minus"
            aria-label="hide"
          />
          <DIcon v-else class="level-item" name="plus" aria-label="show" />
        </span>
      </div>
    </div>

    <div
      v-show="isExpanded"
      data-testid="content"
      class="d-expandable-content px-4 py-3 is-size-6"
      v-bind:class="[borderColor]"
    >
      <slot></slot>
    </div>
  </span>
</template>

<script>
import DIcon from '@/components/d-icon.vue';
import discoBaseMixin from '@/mixins/disco-base-mixin.js';

export default {
  mixins: [discoBaseMixin],
  components: {
    DIcon,
  },
  data() {
    return {
      isFocused: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onSelect() {
      this.$emit('header-click');
    },
    setActive(val) {
      if (val) {
        this.isFocused = true;
        this.$emit('header-active');
      } else {
        this.isFocused = false;
        this.$emit('header-inactive');
      }
    },
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      if (this.isHovered || this.isExpanded) {
        color = `has-text-${this.variant}`;
      }
      return color;
    },
    borderColor() {
      let color = `has-border-left-${this.variant}`;
      return color;
    },
  },
};
</script>
