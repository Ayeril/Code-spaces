function skillsMember() {
  return {
    name: 'skills',
    description: 'A member with skills',
    properties: {
      skills: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: 'List of skills the member possesses'
      }
    }
  };
}