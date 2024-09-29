import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
	const categoryList = ref([])
	const getCategory = async () => {
		let res: any = await getCategoryAPI()
		// console.log('导航栏:', res) 
		categoryList.value = res.result
	}
	return { categoryList, getCategory }
})
export default useCategoryStore
