function filter_list(l) {
   return l.filter(n => typeof n !== 'string' && !isNaN(n));
}
