function uefaEuro2016(teams, scores) {
    const table = teams
        .map((team, index) => ({ team, goals: scores[index] }))
        .sort((a, b) => b.goals - a.goals)
    if (table[0].goals === table[1].goals)
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    return `At match ${teams[0]} - ${teams[1]}, ${table[0].team} won!`
}