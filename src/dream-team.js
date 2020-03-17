module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  teamName = [];

  members.forEach(member => {
    if (typeof member === "string" && member.length > 0) {
      teamName.push(
        member
          .trim()
          .toUpperCase()
          .charAt(0)
      );
    }
  });

  return teamName.sort().join("");
};
