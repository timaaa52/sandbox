function areYouPlayingBanjo(name) {
    let a = name.split('');
    return a[0] == 'r' || a[0] == 'R' ? name + ' plays banjo' : name + ' does not play banjo';
}