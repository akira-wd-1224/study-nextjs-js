namespace DecomposingStatement {
  type Performance = {
    playID: string;
    audience: number;
  };

  type Play = {
    name: string;
    type: string;
  };

  type Invoice = {
    customer: string;
    performances: Performance[];
  };

  type Plays = {
    [playID: string]: Play;
  };

  function amountFor(aPerformance: Performance, plays: Plays): number {
    let result = 0;
    switch (playFor(aPerformance, plays).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`unknown type: ${playFor(aPerformance, plays).type}`);
    }
    return result;
  }

  function playFor(aPerformance: Performance, plays: Plays): Play {
    return plays[aPerformance.playID];
  }

  function volumeCreditsFor(aPerformance: Performance, plays: Plays): number {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance, plays).type) result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function usd(aNumber: number): string {
    return new Intl.NumberFormat("en-US",
      {
        style: "currency", currency: "USD",
        minimumFractionDigits: 2
      }).format(aNumber / 100);
  }

  function statement(invoice: Invoice, plays: Plays): string {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
      // ボリューム特典のポイント加算
      volumeCredits += volumeCreditsFor(perf, plays);
      // 注文の内訳を出力
      result += `  ${playFor(perf, plays).name}: ${usd(amountFor(perf, plays))} (${perf.audience} seats)\n`;
      totalAmount += amountFor(perf, plays);
    }
    result += `Amount owed is ${usd(totalAmount)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
  }
}