export const responseMessageTypes = {
  user: {
    CREATION_SUCCESS: 'CREATION SUCCESS',
    SUCCESS_CONFLICT: 'SUCCESS CONFLICT',
    CREATION_ERROR: 'CREATION_ERROR',
    DELETION_SUCCESS: 'DELETION SUCCESS',
    DELETION_CONFLICT: 'DELETION CONFLICT',
    DELETION_ERROR: 'DELETION_ERROR',
    UPDATE_SUCCESS: 'UPDATE SUCCESS',
    UPDATE_ERROR: 'UPDATE_ERROR',
  },
};

const generateMessage = (
  messageType: string,
  interpolationVariable: string,
): string => {
  switch (messageType) {
    case responseMessageTypes.user.CREATION_SUCCESS:
      return `User with e-mail ${interpolationVariable} created successfully`;
    case responseMessageTypes.user.DELETION_SUCCESS:
      return `User with id ${interpolationVariable} deleted`;
    case responseMessageTypes.user.DELETION_CONFLICT:
      return `User with id ${interpolationVariable} doesen't exist`;
    default:
      return 'Default message generated';
  }
};

export const createResponseMessage = (
  type: string,
  interpolationVariable: string | undefined,
) => {
  if (interpolationVariable) {
    switch (type) {
      case responseMessageTypes.user.CREATION_SUCCESS:
        return generateMessage(
          responseMessageTypes.user.CREATION_SUCCESS,
          interpolationVariable,
        );
      case responseMessageTypes.user.DELETION_SUCCESS:
        return generateMessage(
          responseMessageTypes.user.DELETION_SUCCESS,
          interpolationVariable,
        );
      case responseMessageTypes.user.DELETION_CONFLICT:
        return generateMessage(
          responseMessageTypes.user.DELETION_CONFLICT,
          interpolationVariable,
        );
      default:
        return 'Default response created';
    }
  } else {
    return 'No interpolation variable provided';
  }
};
