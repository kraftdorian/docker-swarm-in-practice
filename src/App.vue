<template lang="pug">
  main.site__content
    article.site__article
      img.article__image(src="@/assets/logo.png" alt="Docker logo")
      h1.article__header Docker Swarm in practice
      h2.article__subheader Course by Damian Kajzer

      .article__content
        p App is served by container !{' '}
          span.text--important {{ dockerContainerId }}
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import { DockerService } from "@/services/docker.service";

@Component
export default class App extends Vue {
  private dockerContainerId = "N/A";

  created() {
    DockerService.getContainerId().then(containerId => {
      this.dockerContainerId = containerId;
    });
  }
}
</script>

<style lang="scss">
// Mobile
.site__content {
  @apply flex items-center justify-center w-screen h-screen;
}

.site__article {
  @apply text-center;

  .article__image {
    @apply mx-auto mb-6 h-32;
  }

  .article__header {
    @apply text-xl text-blue-600 font-bold;
  }

  .article__subheader {
    @apply text-lg text-blue-500 font-medium;
  }

  .article__content {
    @apply py-4 text-sm text-gray-600;
  }
}

.text--important {
  @apply text-blue-500 font-medium;
}

// Small mobile/desktop
@screen md {
  .site__article {
    .article__image {
      @apply h-48;
    }

    .article__header {
      @apply text-2xl tracking-wide;
    }

    .article__subheader {
      @apply text-xl;
    }

    .article__content {
      @apply text-base;
    }
  }
}

// Desktop
@screen lg {
  .site__article {
    .article__image {
      @apply mb-8 h-64;
    }

    .article__header {
      @apply text-4xl;
    }

    .article__subheader {
      @apply text-3xl;
    }

    .article__content {
      @apply text-lg;
    }
  }
}
</style>
