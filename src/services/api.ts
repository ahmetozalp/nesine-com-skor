export default async function fetchMatchs(): Promise<Match[]> {
    const res = await fetch('https://nesine-case-study.onrender.com/bets');
    return await res.json();
}