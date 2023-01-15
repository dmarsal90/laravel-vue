<template>
    <div class="overflow-x-auto">
        <div
            class=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <div class="flex place-content-end mb-4">
                        <div
                            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 mb-4">
                            <router-link to="{ name: 'companies.create' }" class="text-sm font-medium" >Create company</router-link>
                        </div>
                    </div>
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
                            <th scope="col" class="py-3 px-6 text-left">

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
                                <td class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap">
                                    <button @click="deleteCompany(item.id)"
                                            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25">
                                        Delete
                                    </button>
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

const {companies, getCompanies, destroyCompany} = useCompanies()

const deleteCompany = async (id) => {
    if (!window.confirm('You sure?')) {
        return {
            companies
        }
    }

    await destroyCompany(id)
    await getCompanies()
}


onMounted(getCompanies)
</script>
