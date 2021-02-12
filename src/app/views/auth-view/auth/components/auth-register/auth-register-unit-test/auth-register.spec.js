// Libraries
import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Components
import AuthRegister from '../auth-register.vue';

// Mock Data
import SharedMockData from '@/app/tests/unit/mocks/shared-mock-data';
import AuthRegisterMockData from './auth-register-mock-data';

// Utils
import TestCommonUtils from '@/app/tests/unit/utils/test-common-utils';

// Store
import store from '@/app/stores/store';

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(VueRouter);

describe('AuthRegister component', () => {
	let wrapper, utils, sharedMD, componentMD;

	beforeEach(() => {
		utils = new TestCommonUtils(wrapper, expect);
		sharedMD = new SharedMockData;
		componentMD = new AuthRegisterMockData;

		wrapper = shallowMount(AuthRegister, {
			store,
			localVue,
			router
		});
	});

	it('renders without errors', () => {
		expect(wrapper).toBeTruthy();
	});

	it('should show auth-register element', () => {
		utils.doesExist('.auth-register');
	});
});