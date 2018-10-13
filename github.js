class Github {
    constructor() {
        this.client_id = "b97b0cabebaacd5f1e92";
        this.client_secret = "0ff6524cfaffa4f1124797cef63164c695bc76a8";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async userData(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        // const reposResponse = await fetch(`https://api.github.com/users/${user}repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // const profile = await profileResponse.json();

        return {
            profile
        }
    }
}