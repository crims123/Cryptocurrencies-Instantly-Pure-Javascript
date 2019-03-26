class apiRequest {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async showAllCoins() {
       const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
       const coinsRequest = await fetch(url)
       const coins = await coinsRequest.json();
       return Object.values(coins.Data);
    }

    async showCoinValue (currency, crypto) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}&api_key=${this.apiKey}`;
        const coinRequest = await fetch(url)
        const coin = await coinRequest.json();
        return coin.RAW[crypto][currency]
        
    }
}