class Github {
    constructor() {
        this.cliend_id = 'c26e10143ef287c7d4f4'
        this.cliend_secret = 'fee3152596c45cea09f187f43d43eb8e46e9749c'
    }

    async getUser(userText) {
        const profile = await fetch(`https://api.github.com/users/${userText}?this.cliend_id=${this.cliend_id}&client_secret=${this.cliend_secret}`)

        const jsonProfile = await profile.json();
        return {jsonProfile}
    }
}