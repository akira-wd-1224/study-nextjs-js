namespace DecomposingStatement {
  type Invoice = {
    customer: string;
    performances: Performance[];
  };

  type Performance = {
    playID: string;
    audience: number;
  };

  type Plays = {
    [playID: string]: Play;
  };

  type Play = {
    name: string;
    type: string;
  };

  function amountFor(perf: Performance, play: Play): number {
    let result = 0;
    switch (play.type) {
      case "tragedy":
        result = 40000;
        if (perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (perf.audience > 20) {
          result += 10000 + 500 * (perf.audience - 20);
        }
        result += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return result;
  }

  function statement(invoice: Invoice, plays: Plays): string {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format;

    for (let perf of invoice.performances) {
      const play = plays[perf.playID];
      let thisAmount = amountFor(perf, play);
      // ボリューム特典のポイント加算
      volumeCredits += Math.max(perf.audience - 30, 0);
      // 喜劇のときは10人につき、さらにポイントを加算
      if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

      // 注文の内訳を出力
      result += `  ${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
      totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
  }
}