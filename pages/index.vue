<script setup lang="ts">
const { data: techs, pending: tech_pending } = await useLazyFetch('/api/tech')
const { data: headers, pending: header_pending } = await useLazyFetch('/header')
</script>

<template>
  <div class="hero min-h-screen" style="background-image: url(/background.png)">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold text-gray-50/80">Nuxt3 Starter !</h1>
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full">
            <!-- head -->
            <thead>
              <Transition name="bounce">
                <tr v-if="!header_pending">
                  <th v-for="header in headers" class="">
                    {{ header }}
                  </th>
                </tr>
                <IconSpinner v-else />
              </Transition>
            </thead>
            <tbody>
              <!-- row 1 -->

              <tr v-for="(tech, index) in techs">
                <th>{{ index }}</th>
                <td>{{ tech }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
