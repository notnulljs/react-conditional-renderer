export type TControlFlows = {
    classnames: string;
    children: any
}

export type TControlFlowCondition = {
    condition: boolean,
    children: any
}

export default function ControlFlows({ classnames, children }: TControlFlows) {
    let Container = ({ children }: any) => <>{children}</>

    if (classnames) {
        Container = ({ children }: any) => <div className={classnames}>{children}</div>
    }

    return (
    <Container>
        {children}
    </Container>
    )
}

ControlFlows.if = function ifCondition({condition, children}: TControlFlowCondition){
    
    if(!condition){
        return null
    }

    return children;
}


ControlFlows.elseif = function elseifCondition({condition, children}: TControlFlowCondition){
    
    if(!condition){
        return null
    }

    return children;
}