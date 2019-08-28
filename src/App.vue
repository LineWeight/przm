<template>
  <div class="wrapper">
	
    <div  class="sidebar">
      <div class="header">
        <h1>{{title}}</h1>
        <h2>{{subtitle}}</h2>
      </div>
      <div class="buttons">
      <h3>Sort</h3>
        <div class="button"  :key="sort" v-for="sort in sorts">
          <actionArea :activeFlag="sortFlag" :changeEvent="'sortChanged'" :slug="sort.slug" :title="sort.title" @sortChanged="setSortFlag($event)"></actionArea>
        </div>
        <h3>Filter</h3>
        <div class="button" :key="filter" v-for="filter in filters">
          <actionArea :activeFlag="filterFlag" :changeEvent="'filterChanged'" :title="filter.title" :slug="filter.slug" @filterChanged="setFilterFlag($event)"></actionArea>
        </div>
				<h3 v-if="isLoggedIn">{{user.displayName}}</h3>
				<div v-if="isLoggedIn" class="button segmented-button">
					<actionArea :changeEvent="'filterChanged'" :title="'Your Set'" :slug="'UserSet'" @filterChanged="setFilterFlag($event)" ></actionArea>
					<actionArea :activeFlag="false" :changeEvent="'toggleEditState'" :title="'Edit'" :slug="!this.isEditing" @toggleEditState="setEditState($event)"> </actionArea>
				</div>
				<div class="button">
					<actionArea v-if="user" :changeEvent="'triggerLogout'" :title="'Log Out'" @triggerLogout="logOut()"></actionArea>
					<actionArea v-else :changeEvent="'triggerTwitterLogin'" :title="'Log In'" @triggerTwitterLogin="logInWithTwitter()"></actionArea>

				</div>
      </div>
    </div>
  <div class="pens">
      <pen v-for="pen of organizedPens" v-bind:key="pen.colorId" :isInUserSet="isInUserSet(pen.colorId)" @penClicked="handlePenClicked($event)" :pen="pen"></pen>
  </div>

</div>

</template>

<script>

import { auth, db, twitterProvider } from './firebase'
import pen from './components/Pen.vue'
import actionArea from './components/ActionArea.vue'

export default {

	beforeCreate: function () {
		auth.onAuthStateChanged((user) => {
			// console.log(user)
			if (user) {
				this.user = user
				this.$rtdbBind('userPens', db.ref(`users/${user.uid}/pens`))
			} else {
				this.user = null
			}
		})
	},
	name: 'app',
	components: {
		pen, actionArea
	},
	data: () => ({
    sorts:[], 
    pens: [],
    filters: [],
		title: "Przm",
		subtitle: "Reference Guide for Prismacolor Premium Art Markers",
		user: null,
		isEditing: false,
		filterFlag: "200",
    sortFlag: "orgId",
    recentClick: null
	}),

	methods: {
		log(a) {
			console.log(a)
		},
		setFilterFlag(a) {
			this.filterFlag = a;
		},
		setSortFlag(a) {
			this.sortFlag = a;
		},
		setEditState(a) {
			this.isEditing = a;
		},
		handlePenClicked(penColorId) {
			if (this.isEditing) {
				this.$firebaseRefs.userPens.child(penColorId).set(!this.userPens[penColorId] ? true : null)
      }
      
		},
		isInUserSet(id) {
			if (this.userPens) {
				return !!this.userPens[id];
			}
		},
		logInWithTwitter() {
			let newUser = {}
			auth.signInWithPopup(twitterProvider).then(function (result) {
				var token = result.credential.accessToken;
				var secret = result.credential.secret;
				var user = result.user;
			}).catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
				console.error(error)
			});
		},
		logOut() {
			this.filterFlag = "200"
			auth.signOut().then(function () {
			}).catch(function (error) {
				console.error(error)
			});
		}
	},
	firebase: {
		pens:  db.ref('pens'),
		filters: db.ref('data/filters'),
		sorts:  db.ref('data/sorts'),
	},
	computed: {
		organizedPens: function () {
			let ff = this.filterFlag;
			if (ff === 'All') {
				ff = null;
			}
			return this.pens.filter(x => {
				if (ff === "UserSet") {
					return this.userPens[x.colorId]
				}
				if (ff != null) {
					return x.groups[ff] != null
				}
				return true
			}).sort((x, y) => {
				if (x[this.sortFlag] < y[this.sortFlag]) {
					return -1;
				}
				return 1;
			})
		},
		isLoggedIn: function () {
			return !!this.user
		}
	}
}
</script>

<style>
	.pens {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
		grid-auto-rows: 60px;
		grid-gap: 20px;
		margin-bottom: 100px;
	}
	
	.wrapper {
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-gap: 30px;
		margin: 40px;
	}
	
	.buttons {
	
		position: -webkit-sticky;
		position: sticky;
		top: 10px;
		margin-top: 20px;
		display: grid;
		grid-auto-rows: 40px;
		grid-gap: 5px;
	}
</style>
