function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    console.log(m,n)
    // Create a 2D array to store the results of subproblems
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array in a bottom-up manner
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the LCS is stored in dp[m][n]
    return dp[m][n];
}

const calculateLCS = () => {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const result = longestCommonSubsequence(str1, str2);
    document.getElementById("result").innerText = result;
}