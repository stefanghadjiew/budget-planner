export const responseMessageTypes = {
  USER: 'USER',
};

const userMessageTypes = {
  CREATION_SUCCESS: 'CREATION SUCCESS',
  CREATION_ERROR: 'CREATION_ERROR',
  DELETION_SUCCESS: 'DELETION_SUCCESS',
  DELETION_ERROR: 'DELETION_ERROR',
  UPDATE_SUCCESS: 'UPDATE SUCCESS',
  UPDATE_ERROR: 'UPDATE_ERROR',
};

const generateMessage = (
  messageType: string,
  interpolationVariable: string,
): string => {
  switch (messageType) {
    case userMessageTypes.CREATION_SUCCESS:
      return `User with e-mail ${interpolationVariable} created successfully`;
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
      case responseMessageTypes.USER:
        return generateMessage(
          userMessageTypes.CREATION_SUCCESS,
          interpolationVariable,
        );
      default:
        return 'Default response created';
    }
  } else {
    return 'No interpolation variable provided';
  }
};
