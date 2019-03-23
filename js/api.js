class apiRequest {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async showAllCoins() {
       const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
       const coinsRequest = await fetch(url)
       const coins = await coinsRequest.json();
       return [coins.Data];
    }
}