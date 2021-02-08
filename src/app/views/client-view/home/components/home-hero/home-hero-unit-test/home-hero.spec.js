// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import HomeHero from '../home-hero.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import HomeHeroMockData from './home-hero-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('HomeHero component existence', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new HomeHeroMockData;

		wrapper = shallowMount(HomeHero, {
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper.isVueInstance()).toBeTruthy();
	});

	it('should show home-hero element', () => {
		utils.domHas('.home-hero');
	});
});