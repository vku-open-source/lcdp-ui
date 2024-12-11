export default {

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

	// generatePasswordHash: async () => {
		// return dcodeIO.bcrypt.hashSync(inp_registerPassword.text, 10);
	// },
// 
	// verifyHash: async (password, hash) => {
		// return dcodeIO.bcrypt.compareSync(password, hash)
	// },

	// createToken: async (user) => {
		// return jsonwebtoken.sign(user, 'secret', {expiresIn: 60*60});
	// },

	signIn: async () => {
		try {
			const res = await login.run();
			storeValue('token', res.jwt);
			storeValue('user',res.user);

			showAlert("Login successfull");
			
			await this.getRole();
			// await this.getRole();
			// navigateTo('Dashboard', {}, 'SAME_WINDOW');
			return res;
		} catch {
			showAlert("Invalid emaill/password", "error");
		}
		return {};
	},

	register: async () => {
		try {
			const res = await register.run()
			console.log(res)
		} catch {
			showAlert("error")
		}
		// const passwordHash = await this.generatePasswordHash();
		// const [user] = await createUser.run({passwordHash});
		// if (user) {
			// storeValue('token', await this.createToken(user))
			// showAlert('Register Success', 'success');
		// } else {
			// return showAlert('Error creating new user', 'error');
		// }
	},
	async getRole() {
		const res = await GetUser.run();
		const result = res[0].role.name;
		storeValue('role', result);
		showAlert(JSON.stringify(result))
		return result;
	}
	
}