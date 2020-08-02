<template>
  <footer :class="[$style.footer, 'container']">
    <div :class="$style.firstColumn">
      <div :class="$style.colaboradados">
        <label>Colaboradados</label>
        <SocialNetwork :networks="SOCIAL_LINKS.colaboradados" />
      </div>
      <div :class="$style.colaborabot">
        <label>Colaborabot</label>
        <SocialNetwork :networks="SOCIAL_LINKS.colaborabot" />
      </div>
    </div>
    <div :class="$style.thirdColumn">
      <TButton aria-label="Increva-se na nossa newsletter" icon="envelope"
        >Inscreva-se</TButton
      >
      <TButton
        aria-label="Contribua com nosso financiamento coletivo"
        icon="piggy-bank"
        >Contribua</TButton
      >
    </div>
  </footer>
</template>

<script>
import { SOCIAL_LINKS } from "@helpers/constants";

export default {
  name: "Footer",
  data: function() {
    return {
      SOCIAL_LINKS,
    };
  },
};
</script>

<style lang="scss" module>
@import "../styles/tools";

.footer {
  @include grid(3);
}

.colaboradados {
  font-size: 2rem;
  font-weight: 600;
}

.colaborabot {
  font-size: 1.8rem;
  margin-top: 2rem;
}

.firstColumn {
  display: inline-flex;
  flex-direction: column;

  label {
    display: inline-block;
    margin-bottom: 1rem;
  }
}

.thirdColumn {
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  grid-column-start: 3;
}
</style>
