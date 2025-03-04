class Github {
    constructor () {
        this.client_id = '82870fedbb8467cce579';
        this.client_secret = '9cbf5bfb1e9ee5c46b63245e6af517d28c1e05f0';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
     const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=
     ${this.client_secret}`);
     const reposeResponse = await fetch(`https://api.github.com/users/${user}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=
     ${this.client_secret}`);
     const profile = await profileResponse.json();
     const repos = await reposeResponse.json();
     return {
         profile,
         repos
        }
    }
}