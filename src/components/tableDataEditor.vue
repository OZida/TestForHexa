<template>
	<div id="tableDataEditor">
		<div class="header">
			<button @click="addColumn">add row</button>
			<button @click="uploadData">show data</button>
			<button @click="getData">download data</button>
			<button @click="savingData">Saving data in LS</button>
			<textarea cols="30" rows="10" v-model='newColums'></textarea>
		</div>	
		<table>
			<tr class="tr_header">
				<td>Name</td>
				<td>Value</td>
				<td>Delete</td>
			</tr>
			<draggable :list="colums" :element="'tbody'">
			<tr v-for="(column, index) in colums">
				<td>
					<input type="text" name="" v-model="column['name']">
				</td>
				<td>
					<input type="text" name="" v-model="column['value']">
				</td>
				<td>
					<i class="fa fa-times" @click='removeColumn(index)'></i>
				</td>	
			</tr>
		</draggable>
		</table>
	</div>
</template>


<script>
import draggable from 'vuedraggable';
export default {
	data() {
		return {
			colums: [
				{name:'Leanne Graham',
				value: 'Romaguera-Crona',
				},
				{name:'Ervin Howell',
				value: 'Deckow-Crist'
				},	
				{name:'Clementine Bauch',
				value: 'Romaguera-Jacobson',
				},		
				{name:'Patricia Lebsack',
				value: 'Robel-Corkery',
				}
			],
			newColums: []
		}	
	},
	methods: {
		addColumn() {
			this.colums.push({name: this.name, value: this.value});
			this.name = '';
			this.value = '';
		},
		removeColumn(index) {
			this.colums.splice(index, 1);
		},
		uploadData() {
			this.newColums = JSON.stringify(this.colums);
		},
		getData() {
			let newJson = JSON.parse(this.newColums);
			Array.prototype.push.apply(this.colums, newJson);
		},
		savingData() {
			let serialObj = JSON.stringify(this.colums);
			delete localStorage["columsObj"]
			window.localStorage.setItem('columsObj', serialObj);
		}
	},
	components: {
          draggable
     }
}
</script>


<style lang='scss' scoped>

#tableDataEditor {
	width: 50%;
	margin: 0 auto;

	.header {
		background-color: #f44336;
		padding: 30px 40px;
		color: #555;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		button {
			cursor: pointer;
			font-size: 16px;
			width: 40%;
			padding: 10px;
			margin-top: 15px;
			color: #555;
			&:focus {
				outline: none;
			}
			&:hover {
				background-color: #bbb;
				transition: 0.3s;
			}
		}
		textarea {
			margin: 15px 0 0;
			width: 79%;
			color: #555;
			font-size: 16px;
			&:focus {
				outline: none;
			}
		}
	}
	table {
		width: 100%;
		border: 1px solid #ddd;

		.tr_header {
			td {
		    	position: relative;
		    	padding: 12px 8px 12px 40px;
		    	background: #eee;
		    	font-size: 18px;
		    	transition: 0.2s;
		    	-webkit-user-select: none;
		    	-moz-user-select: none;
		    	-ms-user-select: none;
		    	user-select: none;
				&:last-child {
		    		padding: 0;	
		    		width: 40px;
		    	}
			}
		}
		tbody {
			tr {
				td {
					cursor: pointer;
			    	position: relative;
			    	background: #eee;
			    	font-size: 18px;
			    	transition: 0.2s;
			    	-webkit-user-select: none;
			    	-moz-user-select: none;
			    	-ms-user-select: none;
			    	user-select: none;
			    	&:hover {
		    			background: #ddd;
		    			transition: 0.3s;
		    		}
		    		input {
						border: none;
						width: 88%;
						padding: 12px 8px 12px 40px;
						font-size: 16px;
						background-color: #fff;
						&:focus {
							outline: none;
						}
						&:hover {
			    			background: #ddd;
			    			transition: 0.3s;
			    		}
					}
		    		.fa-times {
						font-size: 45px;
						color: #888;
						position: absolute;
						right: 0;
						top: 0;
						padding: 0 6px;
						&:hover {
			    			background-color: #f44336;
			    			color: #fff;
			    			transition: 0.3s;
			    		}
			    	}
				}
			}
		}
	}
}	
</style>
