var numMusicPlaylists = function(n, goal, k) {
    const mod = 1e9 + 7;
    const dp = Array.from({length: goal + 1}, () => Array(n + 1).fill(0));
    
    dp[0][0] = 1;
    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = (dp[i][j] + dp[i-1][j-1] * (n - (j-1))) % mod;
            dp[i][j] = (dp[i][j] + dp[i-1][j] * Math.max(j-k, 0)) % mod;
        }
    }
    
    return dp[goal][n];
};

console.log(numMusicPlaylists(2, 3, 0));  // 6