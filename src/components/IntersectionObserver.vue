<template>
  <div ref="observer" class="observer relative">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ObserverComponent",
  emits: ["visible"],
  props: {
    classToToggle: {
      type: String,
      default: "fadeInTop",
    },
    playOnce: {
      type: [Boolean, String],
      default: false,
    },
  },
  computed: {
    shouldPlayOnce() {
      if (typeof this.playOnce === "string") {
        return this.playOnce.toLowerCase() === "true";
      }
      return Boolean(this.playOnce);
    },
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    let hasEmittedVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(this.classToToggle)
        ) {
          entry.target.classList.add(this.classToToggle);

          if (!hasEmittedVisible) {
            hasEmittedVisible = true;
            this.$emit("visible");
          }

          if (this.shouldPlayOnce) {
            observer.unobserve(entry.target);
          } else {
            setTimeout(() => {
              entry.target.classList.remove(this.classToToggle);
            }, 2000);
          }
        }
      });
    }, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style scoped>
.observer {
  visibility: hidden;
}
.fadeInTop {
  animation: fadeInTop 1s ease-in-out;
  visibility: visible;
}

.fadeInBottom {
  animation: fadeInBottom 1s ease-in-out;
  visibility: visible;
}

.fadeInLeft {
  animation: fadeInLeft 1s ease-in-out;
  visibility: visible;
}

.fadeInRight {
  animation: fadeInRight 1s ease-in-out;
  visibility: visible;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
  }
}
</style>
