<template>
    <div class="overflow-x-auto">
        <div
            class=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max  table-auto">
                        <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th scope="col" class="py-3 px-6 text-left">
                                <span>Name</span>
                            </th>
                            <th scope="col" class="py-3 px-6 text-left">
                                <span>Email</span>
                            </th>
                            <th scope="col" class="py-3 px-6 text-left">
                                <span>Address</span>
                            </th>
                            <th scope="col" class="py-3 px-6 text-left">
                                <span>Website</span>
                            </th>
                        </tr>
                        </thead>

                        <tbody class="text-gray-600 text-sm font-light">

                        <template v-for="item in companies" :key="item.id">
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    {{ item.name }}
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    {{ item.email }}
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    {{ item.address }}
                                </td>
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    {{ item.website }}
                                </td>
                            </tr>
                        </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import useCompanies from '../composables/companies'
import {onMounted} from 'vue';

const {companies, getCompanies} = useCompanies()

onMounted(getCompanies)
</script>
