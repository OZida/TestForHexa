import Vue from 'vue/dist/vue.min.js';
import tableDataEditor from './components/tableDataEditor.vue';
import '../node_modules/font-awesome/scss/font-awesome.scss';


new Vue ({
	el:'#app',
	template: '<div> <table-data-editor> </div>',
	components: {
		tableDataEditor: tableDataEditor
	}
})
